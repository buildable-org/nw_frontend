<script>
    import Faq from '$lib/components/Faq.svelte';
    import Footer from '$lib/components/Footer.svelte';

    export let data;
    const { faqData } = data;
</script>

<div class="global-container">
  <Faq id="faq-section" {faqData} />
  <Footer />
</div>
