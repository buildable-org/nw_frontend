<!--<script lang="ts">
    import { onMount } from 'svelte';
  
    export let formSlug: string; // The slug of the form to fetch
    let formData: { id?: string; attributes?: { name?: string; description?: string; fields?: Array<{ id: string; label: string; type: string; required: boolean; multiple?: boolean }> } } | null = null;
    let responses: Record<string, any> = {};
    let files: Record<string, FileList | null> = {};
    let message = '';
  
    const baseURL = import.meta.env.VITE_PUBLIC_API_URL || 'http://localhost:1337';
  
    onMount(async () => {
      await fetchForm();
    });
  
    async function fetchForm() {
      try {
        const res = await fetch(`${baseURL}/api/forms?filters[slug][$eq]=${formSlug}&populate=fields`);
        const data = await res.json();
        if (data?.data?.length) {
          formData = data.data[0];
        } else {
          message = 'Form not found.';
        }
      } catch (err) {
        console.error('Error fetching form:', err);
        message = 'Failed to load the form.';
      }
    }
  
    async function handleSubmit(event: Event) {
      event.preventDefault();
  
      const formDataToSubmit = new FormData();
      formDataToSubmit.append(
        'data',
        JSON.stringify({
          form: formData.id,
          data: responses,
        })
      );
  
      // Attach files to the formData
      for (const [fieldId, fileList] of Object.entries(files)) {
        if (fileList) {
          for (const file of fileList) {
            formDataToSubmit.append(`files.${fieldId}`, file);
          }
        }
      }
  
      try {
        const response = await fetch(`${baseURL}/api/submissions`, {
          method: 'POST',
          body: formDataToSubmit,
        });
  
        if (response.ok) {
          message = 'Form submitted successfully!';
          responses = {};
          files = {};
        } else {
          const error = await response.json();
          message = `Error: ${error.error.message}`;
        }
      } catch (err) {
        console.error('Error submitting form:', err);
        message = 'Something went wrong. Please try again.';
      }
    }
  </script>
  
  <style>
    /* Reuse your existing styles or customize them here */
    /* Same style as provided in the template */
  </style>
  
  <div class="container" id={formSlug}>
    {#if formData}
      <div class="text-content">
        <h2>{formData.attributes.name}</h2>
        <p>{formData.attributes.description}</p>
      </div>
      <form on:submit={handleSubmit}>
        {#each formData.attributes.fields as field}
          <label>
            {field.label}
            {field.type === 'file' ? (
              <input
                type="file"
                multiple={field.multiple}
                on:change={(e) => (files[field.id] = e.target.files)}
              />
            ) : field.type === 'textarea' ? (
              <textarea
                bind:value={responses[field.id]}
                required={field.required}
              ></textarea>
            ) : (
              <input
                type={field.type}
                bind:value={responses[field.id]}
                required={field.required}
              />
            )}
          </label>
        {/each}
        <button type="submit">Submit</button>
        {#if message}
          <p class="{message.startsWith('Error') ? 'error' : 'message'}">{message}</p>
        {/if}
      </form>
    {:else}
      <p>Loading form...</p>
    {/if}
  </div>
  -->