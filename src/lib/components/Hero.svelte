<script>
  export let heroData;
  import ApplyReadMoreButtons from "./ApplyReadMoreButtons.svelte";
</script>

<div class="container">
  <img class="hero-logo" src="/logo.svg" alt="Logomark">
  <section class="hero">
    <div class="middle-flex">
      <div class="hero-image">
        <img src="/hero.gif" alt="hero gif" />
      </div>
      <div class="hero-text">
        <div class="title-container">
          <h1>{heroData?.data?.greeting}</h1>
        </div>
        <h3>{heroData?.data?.q1}</h3>
        <p>{heroData?.data?.a1}</p>
        <h3>{heroData?.data?.q2}</h3>
        <p>{heroData?.data?.a2}</p>
        <div class="button-container">
          <a class="full-btn" href={heroData?.data?.full_btn_link}>
            {heroData?.data?.full_btn}
          </a>
          <a class="outline-btn" href={heroData?.data?.bordered_btn_link}>
            {heroData?.data?.bordered_btn}
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .hero {
    text-align: center;
    padding: 0 1.5rem;
    position: relative;
    overflow: hidden;
    width: 100vw;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero h1 {
    font-size: 2.2rem;
    font-weight: 400;
    color: var(--yellow);
    letter-spacing: -1px;
    margin-bottom: 0;
    text-align: left;
    display: inline-block;
    width: fit-content;
    position: relative;
  }

  img {
    width: 100%;
    height: auto;
  }

  .hero p {
    font-size: 1.2rem;
    width: 85%;
    max-width: 800px;
    text-align: left;
    margin-bottom: 2rem;
    color: white;
  }

  .title-container {
    justify-content: center;
    max-width: 470px;
    margin: 30px 0 30px 0;
    display: flex;
    gap: 0;
    flex-direction: column;
  }

  .hero-logo {
    position: absolute;
    margin-top: 2rem;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 48px;
    width: fit-content;
    display: inline-block;
  }

  .full-btn:hover {
    background: var(--yellow);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(243, 167, 18, 0.4);
  }

  .subtitle {
    margin-top: 30px;
  }

  .middle-flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    gap: 4rem;
  }

  .hero-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 100%;
  }

  .hero-image {
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: relative; /* Ensures logo positioning relative to the container */
  }

  .hero h3 {
    text-align: left;
    display: block;
    font-size: 1.75em;
    font-weight: 400;
    width: 85%;
    max-width: 800px;
    color: var(--yellow);
  }

  .button-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
    margin-top: 1rem;
  }

  .outline-btn {
    color: var(--gray);
    background: none;
    text-align: left !important;
    padding: 0 !important;
    text-decoration: underline !important;
    align-items: left !important;
    justify-content: left !important;
  }

  .button-container a {
    width: auto;
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

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.5rem;
    }

    .hero p {
      font-size: 1rem;
    }

    .full-btn {
      margin-bottom: 20px !important;
    }

    .hero-logo {
      width: 66vw; /* Smaller logo on small screens */
    }

    .hero-image {
      display: none;
    }

    .middle-flex {
      flex-direction: column;
      gap: 2rem;
      margin: 5rem;
    }
  }
</style>
