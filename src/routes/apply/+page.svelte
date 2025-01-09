<script>
    // @ts-ignore
    import Application from '$lib/components/Application.svelte';
    import Footer from '$lib/components/Footer.svelte';

    // @ts-ignore
    export let data;
    const { formData } = data;
</script>

<svelte:head>
  <title>Apply - Sidequest</title>
</svelte:head>  

<div class="global-container">
  <Application id="signup" {formData} />
  <Footer />
</div>
