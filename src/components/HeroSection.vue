<template>
  <div
    class="relative h-[92vh] flex align-middle justify-around p-4 text-white"
  >
    <div>
      <h2 class="text-[70px] z-50 mt-[100px]">{{ title1 }}</h2>
      <h1 class="text-[100px] z-50">{{ title2 }}</h1>
      <h2 class="text-[40px] z-50">{{ jobs }}</h2>
      <div
        class="absolute -left-[200px] top-[180px] w-[500px] h-[70px] bg-violet-200 z-0 rounded-full rotate-[40deg]"
      ></div>
      <div
        class="absolute -left-[200px] top-[400px] w-[700px] h-[70px] bg-green-100 z-0 opacity-70 rounded-full rotate-[40deg]"
      ></div>
      <div
        class="absolute -left-[200px] top-[430px] w-[450px] h-[70px] bg-red-200 z-0 opacity-70 rounded-full rotate-[40deg]"
      ></div>
      <div
        class="absolute -left-[100px] top-[600px] w-[350px] h-[70px] bg-orange-200 z-0 opacity-70 rounded-full rotate-[40deg]"
      ></div>
      <p></p>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1: "Hello, I'm",
      title2: "Zayar Lin Maung",
      jobs: "Founder, Principal and Instructor of Genesis",
    };
  },
};
</script>

<style></style>
