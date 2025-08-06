import { Button, Card, CardBody, CardHeader, FormControl, FormLabel, Heading, HStack, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Image as ChakraImage } from '@chakra-ui/react'
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { RxPencil2 } from "react-icons/rx";
import { supabase } from "@/util/supabase";

const compressImage = (file, quality = 0.7, maxWidth = 1000) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        ``
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

export default function BlogGenerator() {
  const [blogTitle, setBlogTitle] = useState("")
  const [blogAuthor, setBlogAuthor] = useState("")
  const [blogImage, setBlogImage] = useState("https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")
  const imageInputRef = useRef(null);

  const [isComplete, setIsComplete] = useState(false)

  const editorRef = useRef(null)

  const triggerFileInput = () => {
    imageInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");

          const maxWidth = 800;
          const maxHeight = 800;
          let width = img.width;
          let height = img.height;

          // Maintain aspect ratio
          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          // Compress to JPEG with 60% quality and convert to base64
          const base64 = canvas.toDataURL("image/jpeg", 0.6);

          setBlogImage(base64);
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCreateBlog = async () => {
    if (editorRef.current) {
      const blogContent = editorRef.current.html.get();

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
            cover_image: blogImage,
            date_posted: blogDate,
          },
        ])
        .select()

      console.log(data)
    }

  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/froala-editor@latest/js/froala_editor.pkgd.min.js';
    script.onload = () => {
      const FroalaEditor = window.FroalaEditor;

      editorRef.current = new FroalaEditor('#example', {
        height: 500
      }, {
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

  return (
    <>
      <Head>
        <title>Create New Blog | Kasama</title>
        <link href='https://cdn.jsdelivr.net/npm/froala-editor@latest/css/froala_editor.pkgd.min.css' rel='stylesheet' type='text/css' />
      </Head>
      <HStack p={4} spacing={4} backgroundColor="gray.200" height="100dvh" alignItems="flex-start" justifyContent="center">
        <Stack w="45%">
          <Card>
            <CardBody>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input value={blogTitle} onChange={e => setBlogTitle(e.currentTarget.value)} type="text" placeholder="" />
                </FormControl>
                <FormControl>
                  <FormLabel>Content</FormLabel>
                  <div id="example"></div>
                </FormControl>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
        <Stack w="18%" spacing={4}>
          <Card>
            <CardHeader fontWeight="bold">Visibility</CardHeader>
            <CardBody pt={0}>
              <FormControl>
                <RadioGroup defaultValue='visible'>
                  <Stack>
                    <Radio value="visible">Visible</Radio>
                    <Radio value="hidden">Hidden</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </CardBody>
          </Card>
          <Card>
            <CardHeader fontWeight="bold">
              <HStack>
                <Heading size="sm">Image</Heading>
                <Button size="sm" variant="link" leftIcon={<RxPencil2 />} ml="auto" onClick={triggerFileInput}>Change</Button>
              </HStack>
            </CardHeader>
            <CardBody pt={0}>
              <ChakraImage backgroundColor="gray.200" border="none" outline="none" borderRadius="8px" src={blogImage} width="100%" height="150px" objectFit="cover" />
              <input
                type="file"
                accept="image/*"
                ref={imageInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader fontWeight="bold">Organization</CardHeader>
            <CardBody pt={0}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Author</FormLabel>
                  <Input value={blogTitle} onChange={e => setBlogAuthor(e.currentTarget.value)} type="text" placeholder="" />
                </FormControl>
              </Stack>
            </CardBody>
          </Card>
          <Button isDisabled={!isComplete} colorScheme={isComplete ? "green" : "gray"}>Save</Button>
        </Stack>
      </HStack>
    </>
  )
}