<script>
  export let ctaData;
</script>

<section class="cta">
  <div class="middle-flex">
    <p>{ctaData?.data?.description}</p>
    <div class="title-container">
      <h1>{ctaData?.data?.title}</h1>
    </div>
    <div class="button-container">
      <a class="full-btn" href={"/apply"}>apply to s1</a>
      <a class="outline-btn" href={"/faq"}>faq</a>
    </div>
  </div>
</section>

<style>

  .cta {
    background: none;
    padding: 80px 20px;
    text-align: center;
  }

  .cta h1 {
    font-size: 4rem;
    font-family: "Almarai", serif;
    font-weight: 700;
    color: var(--yellow);
    letter-spacing: -1px;
    margin-bottom: 4rem;
    text-align: center;
    display: inline-block;
    width: fit-content;
    position: relative;
    line-height: 1;

  }

  .cta p {
    font-size: 1.2rem;
    width: 85%;
    max-width: 800px;
    text-align: center;
    color: white;
  }

  .title-container {
    justify-content: center;
    align-items: center;
    max-width: 470px;
    margin: 30px 0 30px 0;
    display: flex;
    gap: 0;
    flex-direction: column;
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
