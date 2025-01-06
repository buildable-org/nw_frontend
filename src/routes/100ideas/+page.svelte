<script>
    import Ideas from '$lib/components/100ideas.svelte';
    import Footer from '$lib/components/Footer.svelte';

    export let data;
    const { ideaData } = data;
</script>

<div class="global-container">
  <Ideas id="ideas-section" {ideaData} />
  <Footer />
</div>
