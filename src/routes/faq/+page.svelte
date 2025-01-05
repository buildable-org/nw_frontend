<script>
    import Faq from '../../lib/components/Faq.svelte';

    export let data;
    const { faqData } = data;
</script>

<div class="global-container">
  <Faq id="faq-section" {faqData} />
</div>
