<script>
  export let id;
  export let faqData;

  console.log(faqData);
</script>

<section class="faq" {id}>
  <h2>{faqData?.title}</h2>
  <div class="button-container">
    <a class="full-btn" href={"/apply"}>apply (4mins)</a>
  </div>    
  <div class="list">
    {#each faqData?.faq_items as question}
      <div class="card">
        <h4>{question.question}</h4>
        <p>{question.answer}</p>
      </div>
    {/each}
  </div>
  <div class="description">
    {faqData?.description}
  </div>
  <div class="button-container">
    <a class="full-btn" href={"/apply"}>apply (4mins)</a>
  </div>    
</section>

<style>
  .faq {
    background: none;
    padding: 80px 20px;
    text-align: center;
  }

  .faq h2 {
    font-size: 2.5rem;
    color: var(--red);
    margin-bottom: 50px;
    font-family: "Almarai", serif;
    font-weight: 700;
  }

  .list {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 8px;
    border-left: 2px solid var(--red);
  }

  .card {
    padding: 20px;
    text-align: left;
    padding: 0.8rem;
    margin: 0.2rem 1rem;
    font-size: 1rem;
    color: #ffffff;
  }

  .card h4 {
    font-size: 1.2rem;
    color: var(--red);
    margin-bottom: 10px;
  }

  .card p {
    font-size: 0.95rem;
    color: white;
  }

  .faq .description {
    max-width: 700px;
    margin: 50px auto 0;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--yellow);
  }

  .full-btn:hover {
    background: var(--yellow);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(243, 167, 18, 0.4);
  }

  .outline-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(243, 167, 18, 0.4);
  }

  .middle-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .button-container {
    margin-bottom: 2em;
  }

  .button-container a {
    max-width: 220px;
    margin: 0 10px;
    padding: 0.8rem 2.2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 3px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .full-btn {
    color: #ffffff;
    background: var(--red);
    border: none;
    border: 2px solid var(--red);
  }

  .outline-btn {
    color: var(--yellow);
    background: none;
    border: 2px solid var(--yellow);
  }

  @media (max-width: 768px) {
    .cta h1 {
      font-size: 2.5rem;
    }

    .cta p {
      font-size: 1rem;
    }

    .full-btn {
      margin-bottom: 20px !important;
    }
  }
</style>
