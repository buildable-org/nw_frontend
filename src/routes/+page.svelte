<script>
    import Hero from '$lib/components/Hero.svelte';
    import Why from '$lib/components/Why.svelte';
    import Roadmap from '$lib/components/Roadmap.svelte';
    import BottomCTA from '$lib/components/BottomCTA.svelte';
  
    export let data;
    const { heroData, cardsData, roadmapData, formData } = data;
  </script>

<div class="global-container">
  <Hero {heroData} />
  <Why id="why" {cardsData} />
  <Roadmap {roadmapData} />
  <BottomCTA id="signup" {formData} />
</div>
  