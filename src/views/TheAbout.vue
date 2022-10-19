<template>
  <div class="flex flex-col gap-8">
    <img :src="TopImage" class="h-28 rounded-xl object-cover"/>
    <p
        class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      You can find my projects on my
      <LinkBtn link="https://github.com/MIP01">Github</LinkBtn>
    </p>
    <p
        class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Outside this, My favorite game is World of Warships, you can see my <LinkBtn link="https://asia.wows-numbers.com/player/2026929398,Alterlium/">World of Warships</LinkBtn> statistic or 
      add me to play together
    </p>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"/>
  </div>
</template>
<script setup>
import TopImage from "../assets/imgs/World of Warships.png"
</script>
