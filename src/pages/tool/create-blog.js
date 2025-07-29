import { Box, Button, Card, CardBody, FormControl, FormLabel, Heading, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { Image as ChakraImage } from '@chakra-ui/react'
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { RxImage } from "react-icons/rx";
import styles from './blog-generator.module.css'
import { supabase } from "@/util/supabase";

const compressImage = (file, quality = 0.7, maxWidth = 1000) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = Math.min(maxWidth / img.width, 1);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) => {
            resolve(blob);
          },
          'image/jpeg',
          quality
        );
      };
    };
    reader.readAsDataURL(file);
  });
};

export default function BlogGenerator(){
  const [blogTitle, setBlogTitle] = useState("")
  const [blogAuthor, setBlogAuthor] = useState("")
  const [blogDate, setBlogDate] = useState(new Date())

  const editorRef = useRef(null)

  const handleCreateBlog = async () => {
    if (editorRef.current) {
      const blogContent = editorRef.current.html.get();
      console.log('Blog content:', blogContent);

      const slug = blogTitle
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // remove special chars
        .replace(/\s+/g, '-')     // replace spaces with hyphens
        .replace(/--+/g, '-')     // collapse multiple hyphens
        .replace(/^-+|-+$/g, ''); // trim hyphens

        
      const { data, error } = await supabase
        .from('blogs')
        .insert([
          { 
            slug: slug, 
            title: blogTitle, 
            author: blogAuthor, 
            content: blogContent, 
            cover_image: 'someValue', 
            date_posted: blogDate, 
          },
        ])
        .select()
      
      console.log(data)
    }

  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/froala-editor@latest/js/froala_editor.pkgd.min.js';
    script.onload = () => {
      const FroalaEditor = window.FroalaEditor;

      editorRef.current = new FroalaEditor('#example', {
        events: {
          async 'image.beforeUpload'(files) {
            if (files.length) {
              const file = files[0];
              const compressedBlob = await compressImage(file);
              const reader = new FileReader();

              reader.onload = (e) => {
                this.image.insert(e.target.result, null, null, this.image.get());
              };
              reader.readAsDataURL(compressedBlob);
            }

            return false;
          },
        },
      });
    };
    document.body.appendChild(script);
  }, []);

  return(
    <>
      <Head>
        <title>Create New Blog | Kasama</title>
        <link href='https://cdn.jsdelivr.net/npm/froala-editor@latest/css/froala_editor.pkgd.min.css' rel='stylesheet' type='text/css' />
      </Head>
      <HStack p={4} gap={4} justify="center">
        <Stack justifyContent="center" maxW="800px" spacing={4}>
          <Stack>
            <FormControl>
              <FormLabel fontSize="18px" fontWeight="bold">BLOG TITLE</FormLabel>
              <Input value={blogTitle} onChange={e => setBlogTitle(e.currentTarget.value)} type="text" placeholder="This is my blog" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="18px" fontWeight="bold">AUTHOR</FormLabel>
              <Input value={blogAuthor} onChange={e => setBlogAuthor(e.currentTarget.value)} type="text" placeholder="Ariel Jericko F. Gacilo" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="18px" fontWeight="bold">DATE</FormLabel>
              <Input value={blogDate} onChange={e => setBlogDate(e.currentTarget.value)} type="date" />
            </FormControl>
          </Stack>
          <Text fontSize="18px" fontWeight="bold">CONTENT</Text>
          <div id="example"></div>
          <Stack>
            <Button size="lg" width="25%" alignSelf="flex-end" colorScheme="green" onClick={handleCreateBlog}>CREATE BLOG</Button>
          </Stack>
        </Stack>
      </HStack>
    </>
  )
}