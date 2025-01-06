<script lang="ts">
  interface FormField {
    id: number;
    label: string;
    type: string;
    required: boolean;
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
  let responseMessage = '';
  let isSubmitted = false;

  //rate limit (percenkent csak 1et enged)
  let lastSubmissionTime = 0;
  const RATE_LIMIT_MS = 60000;

  function sanitizeInput(input: string) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
  }

  function normalizeKey(key: string) {
    return key.toLowerCase().replace(/\s+/g, '_');
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();

    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < RATE_LIMIT_MS) {
      responseMessage = "you're submitting too fast, pls wait a bit";
      return;
    }

    const honeypotField = (document.getElementById('mezescsupor') as HTMLInputElement)?.value || '';
    if (honeypotField.trim() !== '') {
      responseMessage = 'you seem to be a bot, pls stop';
      return;
    }

    lastSubmissionTime = currentTime;

    if (!formData || !formData.form_fields) {
      responseMessage = 'form is not avaliable';
      return;
    }

    const sanitizedData: { [key: string]: string } = {};

    formData.form_fields.forEach((field) => {
      const key = normalizeKey(field.label); 
      const value = fieldValues[field.label] || '';
      sanitizedData[key] = sanitizeInput(value.trim());
      if (field.required && !sanitizedData[key]) {
        responseMessage = `please fill in this too: ${field.label}`;
        throw new Error('uh-oh you skipped something required');
      }
    });

    try {
      const baseURL = 'http://34.59.144.159:1337/';

      const res = await fetch(`${baseURL}/api/form-responses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            form: formData.id,
            data: sanitizedData,
            submitted_at: new Date().toISOString(),
          }
        }),
      });

      if (res.ok) {
        responseMessage = "alrighty, thanks for the interest, you're all set :)\nwe'll be in touch befor you know it";
        fieldValues = {};
        isSubmitted = true;
      } else {
        const error = await res.json();
        responseMessage = `there was an issue: ${error.error.message}`;
      }
    } catch (err) {
      responseMessage = 'there was an issue, please try again later';
      console.error(err);
    }
  }
</script>


 
  <style>
  
    .container {
      padding: 4rem 2rem;
      max-width: 900px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    }
  
    .button-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  
    h2 {
      font-size: 2.5rem;
      color: var(--red);
      margin-bottom: 1rem;
      text-align: center;
    }
  
    p {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--gray);
      margin-bottom: 2rem;
    }
  
    form p {
        margin-bottom: 0;
    }
    .button-container a {
      padding: 0.8rem 2.2rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 3px;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      height: 90%;
    }

    form {
        border-left: 3px solid var(--red);
        padding: 20px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 400px;
        margin: 0 auto;
    }

    input {
        padding: 0.5rem;
        font-size: 1rem;
        background: none;
        border: none;
        border-bottom: var(--yellow) 2px solid;
        color: var(--yellow);
    }

    input:focus {
        outline: none;
        border: none;
    }

    input::placeholder {
        color: var(--yellow);
    }

    button {
        padding: 0.5rem;
        font-size: 1rem;
        background-color: var(--red);
        border: none;
        border-radius: 3px;
        cursor: pointer;
        font-weight: 600;
        color: #ffffff;
    }

    button:hover {
        background: var(--yellow);
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(243, 167, 18, 0.4);
    }

    .message {
        text-align: center;
        color: var(--red);
    }

    .error {
        text-align: center;
        color: red;
    }
  
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        align-items: flex-start;
      }
  
      .button-container {
        width: 100%;
        align-items: center;
      }
  
      .button-container a {
        max-width: 220px;
      }
    }
  </style>
  
  <div class="container" id={id}>
    {#if formData}
      <div class="text-content">
        <h2>{formData.name}</h2>
        {#if formData.description}
          <p>{formData.description}</p>
        {/if}
      </div>
      {#if !isSubmitted}
        <form on:submit={handleSubmit}>
          {#each formData.form_fields as field}
            <div>
              <input type="text" id="mezescsupor" name="mezescsupor" style="display: none;" />
              <input
                id={field.label}
                type={field.type === 'shortText' ? 'text' : field.type}
                placeholder={field.label}
                bind:value={fieldValues[field.label]}
                required={field.required}
              />
            </div>
          {/each}
          <button type="submit">Submit</button>
        </form>
      {/if}
      {#if responseMessage}
            <p style="margin-bottom: 0">{responseMessage}</p>
      {/if}
    {:else}
      <p>Loading form...</p>
    {/if}
  </div>