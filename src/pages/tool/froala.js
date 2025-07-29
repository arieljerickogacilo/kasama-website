import { Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Froala(){
  return (
    <>
      <Head>
        <link href='https://cdn.jsdelivr.net/npm/froala-editor@latest/css/froala_editor.pkgd.min.css' rel='stylesheet' type='text/css' />
        <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/froala-editor@latest/js/froala_editor.pkgd.min.js'></script>
        <script>
          var editor = new FroalaEditor('#example');
        </script>
      </Head>
      <Stack>
        <Text fontSize="24px">Froala Editor</Text>
        <div id="example"></div>
      </Stack>
    </>
  )
}