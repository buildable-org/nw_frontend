<script>
    // @ts-ignore
    import Application from '$lib/components/Application.svelte';

    // @ts-ignore
    export let data;
    const { formData } = data;
</script>

<div class="global-container">
  <Application id="signup" {formData} />
</div>
