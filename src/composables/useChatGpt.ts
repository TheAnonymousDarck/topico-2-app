// import  OpenAIApi  from 'openai'
// import { ref } from 'vue'
// import type { Ref } from 'vue'
//
// export enum Role {
//   User = 'user',
//   Error = 'error',
// }
// export default function useChatGpt(){
//
//   const configuration = {
//     apiKey: import.meta.env.VITE_OPENAI_API_KEY,
//   };
//
//   const openai: OpenAIApi = new OpenAIApi();
//
//   const query: Ref<string> = ref('');
//   const responseContent: Ref<ContentData[]> = ref([]);
//   const isLoading: Ref<boolean> = ref(false);
//
//   const scrollToBottom = (): void => {
//     window.scrollTo(0, document.body.scrollHeight)
//   }
//
//   const splitContent: (content: string) => (string | CodeBlock)[] = (
//     content
//   ) => {
//     const paragraphs = content.split('\n\n')
//     const codeBlocks = content.split('```')
//
//     if (codeBlocks.length > 1) {
//       return codeBlocks.map((codeBlock, i) => {
//         if (i % 2 === 0) {
//           return `${codeBlock}`
//         } else {
//           return {
//             codeBlock,
//           }
//         }
//       })
//     } else {
//       return paragraphs.map((paragraph) => `${paragraph}`)
//     }
//   }
//
//   const createChatCompletion = openai
//     .createChatCompletion({
//       model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-3.5-turbo',
//       messages: [{ role: 'user', content: query.value }],
//     })
//     .then( (response: any) => {
//       const content = response.data.choices[0].message as ResponseContentData
//
//       responseContent.value.splice(responseContent.value.length - 1, 1, {
//         question: query.value,
//         role: content.role,
//         answer: content.content,
//       })
//     })
//     .catch( (error:any) => {
//       const errorResponse = error.response.data as ErrorResponse
//
//       responseContent.value.splice(responseContent.value.length - 1, 1, {
//         question: query.value,
//         role: Role.Error,
//         answer: errorResponse.error.message,
//       })
//     })
//     .finally(() => {
//       isLoading.value = false
//       query.value = ''
//       scrollToBottom()
//     })
//
//
//
//   return {
//     configuration,
//     openai,
//     query,
//     responseContent,
//     isLoading,
//     createChatCompletion,
//     scrollToBottom,
//     splitContent,
//   }
// }