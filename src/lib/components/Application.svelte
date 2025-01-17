<script lang="ts">
  interface FormField {
    id: number;
    label: string;
    type: string;
    required: boolean;
    order: number;
    placeholder?: string;
    description?: string;
  }

  interface FormData {
    id: number;
    name: string;
    description: string | null;
    slug: string;
    form_fields: FormField[];
  }

  export let id: string;
  export let formData: FormData | null;

  let fieldValues: { [key: string]: string } = {};
  let responseMessage = "";
  let isSubmitted = false;

  let lastSubmissionTime = 0;
  const RATE_LIMIT_MS = 60000;

  const fields = formData?.form_fields.sort((a, b) => a.order - b.order);

  function sanitizeInput(input: string) {
    const element = document.createElement("div");
    element.innerText = input;
    return element.innerHTML;
  }

  function normalizeKey(key: string) {
    return key.toLowerCase().replace(/\s+/g, "_");
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();

    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < RATE_LIMIT_MS) {
      responseMessage = "you're submitting too fast, please wait a bit";
      return;
    }

    const honeypotField =
      (document.getElementById("mezescsupor") as HTMLInputElement)?.value || "";
    if (honeypotField.trim() !== "") {
      responseMessage = "you seem to be a bot, please stop";
      return;
    }

    lastSubmissionTime = currentTime;

    if (!formData || !formData.form_fields) {
      responseMessage = "form is not available";
      return;
    }

    const sanitizedData: { [key: string]: string } = {};

    formData.form_fields.forEach((field) => {
      const key = normalizeKey(field.label);
      const value = fieldValues[field.label] || "";
      sanitizedData[key] = sanitizeInput(value.trim());
      if (field.required && !sanitizedData[key]) {
        responseMessage = `please fill in this too: ${field.label}`;
        throw new Error("uh-oh you skipped something required");
      }
    });

    // Send custom event to Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submission', {
        event_category: 'sign_up',
        event_label: 'sign_up_form',
        // Additional parameters can go here (GA4)
      });
    }


    try {
      const baseURL = "";


      const res = await fetch(`/api/form-responses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            title: formData.name,
            form: formData.id,
            data: sanitizedData,
            submitted_at: new Date().toISOString(),
          },
        }),
      });

      if (res.ok) {
        responseMessage = `Alrighty, thanks for the interest, you're all set :)<br><br>We'll be in touch before you know it`;
        fieldValues = {};
        isSubmitted = true;
      } else {
        const error = await res.json();
        responseMessage = `there was an issue: ${error.error.message}`;
      }
    } catch (err) {
      responseMessage = "there was an issue, please try again later";
      console.error(err);
    }
  }

  function autoResizeTextarea(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
</script>

<div class="container" {id}>
  {#if formData && fields}
    <div class="text-content">
      <h2>{formData.name}</h2>
      {#if formData.description}
        <!-- Its be there or be square :) -->
        <h3>{formData.description}</h3>
      {/if}
    </div>
    {#if !isSubmitted}
      <form on:submit={handleSubmit}>
        {#each fields as field}
          <div class="form-group">
            <label for={field.label}>{field.label} </label>
            {#if field.description}
              <p class="field-description">{field.description}</p>
            {/if}
            <input
              type="text"
              id="mezescsupor"
              name="mezescsupor"
              style="display: none;"
            />
            {#if field.type === "longText"}
              <textarea
                id={field.label}
                placeholder={field.placeholder || ""}
                bind:value={fieldValues[field.label]}
                required={field.required}
                on:input={autoResizeTextarea}
              ></textarea>
            {:else}
              <input
                id={field.label}
                type={field.type === "shortText" ? "text" : field.type}
                placeholder={field.placeholder || ""}
                bind:value={fieldValues[field.label]}
                required={field.required}
              />
            {/if}
          </div>
        {/each}
        <button type="submit">Submit</button>
      </form>
    {/if}
    {#if responseMessage}
      <p style="margin-bottom: 0">{@html responseMessage}</p>
    {/if}
  {:else}
    <p>Loading form...</p>
  {/if}
</div>

<style>
  .container {
    padding: 4rem 2rem;
    max-width: 800px;
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    border-radius: 8px;
    min-height: calc(100vh - 104px);
  }

  h2 {
    font-size: 2.5rem;
    color: var(--red);
    margin-bottom: 1rem;
    text-align: center;
    font-family: "Almarai", serif;
    font-weight: 600;  }

  h3 {
    text-align: center;
    margin: 1rem 1rem 2rem 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255 , 0.5);
  }

  form {
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 700px;
    margin: 0 auto;
    border-left: 2px solid var(--red);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  input,
  textarea {
    padding: 0.8rem;
    margin: 0.8rem 0 1.2rem;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    background: rgba(255, 255, 255, 0.05);
    border: none;
    border-radius: 4px;
    width: 100%;
    color: #ffffff;
    transition: all 0.2s ease-in-out;
  }

  input:focus,
  textarea:focus {
    outline: 2px solid rgba(243, 167, 18, 0.4);
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255 , 0.7);
  }

  textarea {
    resize: none;
    overflow: hidden;
    min-height: 7rem;
  }

  button {
    padding: 0.8rem;
    font-size: 1rem;
    background-color: var(--yellow);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    color: #ffffff;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #d98c00;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(243, 167, 18, 0.4);
  }

  @media (max-width: 768px) {
    .container {
      padding: 2rem 1rem;
    }

    form {
      padding: 15px;
    }
  }
</style>

