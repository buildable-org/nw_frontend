<script>
    import Faq from '$lib/components/Faq.svelte';
    import Footer from '$lib/components/Footer.svelte';

    export let data;
    const { faqData } = data;
</script>

<svelte:head>
  <title>FAQ - Sidequest</title>
</svelte:head>  

<div class="global-container">
  <Faq id="faq-section" {faqData} />
  <Footer />
</div>
