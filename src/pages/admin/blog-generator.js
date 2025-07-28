import { Box, Button, Card, CardBody, FormControl, FormLabel, Heading, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { Image as ChakraImage } from '@chakra-ui/react'
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { RxImage } from "react-icons/rx";
import styles from './blog-generator.module.css'
import { supabase } from "@/util/supabase";

export default function BlogGenerator(){
  const [content, setContent] = useState('')
  const [title, setTitle] = useState("This is title")
  const [author, setAuthor] = useState("This is author")
  const [datePost, setDatePost] = useState(() => {
    const today = new Date()
    return today.toISOString().split('T')[0] // 'YYYY-MM-DD'
  })


  const fileInputRef = useRef(null)
  const [previewSrc, setPreviewSrc] = useState(null)

  const editorRef = useRef(null)

   const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewSrc(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const toolbarOptions = [
    ['bold', 'italic', 'underline'], 
    ['link', 'image'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'align': [] }],
  ];

  useEffect(() => {
    if (!editorRef.current) return

    const quill = new Quill(editorRef.current, {
      modules: {
        toolbar: toolbarOptions, // You can also provide a DOM element for custom toolbar
      },
      placeholder: 'Compose an epic...',
      theme: 'snow',
    })

    quill.on('text-change', () => {
      setContent(quill.root.innerHTML) // This is HTML string
    })

    quill.getModule('toolbar').addHandler('image', () => {
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'image/*')
      input.click()

      input.onchange = async () => {
        const file = input.files[0]
        if (!file) return

        const compressed = await compressImage(file, 0.7, 1000)
        const range = quill.getSelection()
        quill.clipboard.dangerouslyPasteHTML(
          range.index,
          `<center><img src="${compressed}" style="max-height:300px;" /></center>`
        )
      }
    })

  }, [])
  
  function compressImage(file, quality = 0.7, maxWidth = 1000) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = () => {
        const img = new Image()
        img.src = reader.result

        img.onload = () => {
          const canvas = document.createElement('canvas')

          const scale = Math.min(maxWidth / img.width, 1)
          canvas.width = img.width * scale
          canvas.height = img.height * scale

          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

          const compressedBase64 = canvas.toDataURL('image/jpeg', quality)
          resolve(compressedBase64)
        }

        img.onerror = reject
      }

      reader.onerror = reject
    })
  }

  const handleCreateBlog = async () => {
    // console.log(content)
    const { data, error } = await supabase
      .from('blogs')
      .insert([
        { 
          author: author, 
          title: title,
          cover_image: '',
          content: content,
          date_posted: datePost
        },
      ])
      .select()

    if(data){
      console.log(data)
    }

  }
  
  return(
    <>
    <Head>
      <title>Create New Blog | Kasama</title>
      <link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js"></script>
    </Head>
    <HStack p={4} gap={4} alignItems="flex-start">
      <Stack w="30%">
        <Card>
          <CardBody>
            <Stack gap={4}>
              <FormControl>
                <FormLabel>Cover Image</FormLabel>
                <Button onClick={() => fileInputRef.current.click()} leftIcon={<RxImage />}>Select Image</Button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <ChakraImage src={previewSrc} />
              </FormControl>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input value={title} onChange={(e) => setTitle(e.currentTarget.value)} type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Author</FormLabel>
                <Input type="text" value={author} onChange={(e) => setAuthor(e.currentTarget.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input type="date" value={datePost} onChange={(e) => setDatePost(e.currentTarget.value)} />
              </FormControl>
            </Stack>
          
          </CardBody>
        </Card>
        <Button colorScheme="green" onClick={handleCreateBlog}>Create Blog</Button>
      </Stack>
      <Stack justifyContent="flex-start" flex={1}>
        <div ref={editorRef} />
      </Stack>
    </HStack>
    </>
  )
}