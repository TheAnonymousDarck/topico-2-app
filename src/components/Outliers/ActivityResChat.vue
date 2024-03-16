
<script setup lang="ts">
import useChatGpt, { Role } from '@/composables/useChatGpt'

interface Question {
  text: string;
  type: 'text' | 'select' | 'radio';
  options?: string[];
  answer: string | null;
}

const props = defineProps<{
  data: any | Question,
}>();

const prompt = ``;

const { openai,createChatCompletion, query,responseContent,splitContent,configuration, scrollToBottom,isLoading } = useChatGpt();

const handleQuery: () => void = async () => {
  if (query.value === '') {
    return
  }
  isLoading.value = true;
  responseContent.value.push({
    question: query.value,
    role: Role.User,
    answer: 'Loading...',
  });
  scrollToBottom();
  openai();
  await createChatCompletion();
}

</script>

<template>
  <div class="">
    <pre>
      {{ data }}
    </pre>
  </div>

</template>

<style scoped>

</style>