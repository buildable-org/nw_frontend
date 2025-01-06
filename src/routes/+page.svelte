<script>
    import Hero from '$lib/components/Hero.svelte';
    import Why from '$lib/components/Why.svelte';
    import Roadmap from '$lib/components/Roadmap.svelte';
    import BottomCta from '$lib/components/BottomCTA.svelte';
    import Footer from '$lib/components/Footer.svelte';
  
    export let data;
    const { heroData, cardsData, roadmapData, ctaData} = data;
</script>

<div class="global-container">
  <Hero {heroData} />
  <Why id="why" {cardsData} />
  <Roadmap {roadmapData} />
  <BottomCta {ctaData} />
  <Footer />
</div>
