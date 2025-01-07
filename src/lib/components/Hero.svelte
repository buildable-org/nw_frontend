<script>
  export let heroData;
  import ApplyReadMoreButtons from "./ApplyReadMoreButtons.svelte";
</script>

<div class="container">
  <section class="hero">
    <div class="middle-flex">
      <div class="title-container">
        <h1>{heroData?.data?.greeting}</h1>
        <svg
          class="hero-logo"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_2"
          data-name="Layer 2"
          viewBox="0 0 221.76 60.79"
          width="221.75999450683594"
          height="60.790000915527344"
        >
          <defs>
            <style>
              .cls-1 {
                fill: #fff;
                stroke-width: 0px;
              }
            </style>
          </defs>
          <g id="LOGO">
            <g>
              <g>
                <path
                  class="cls-1"
                  d="m73.26,40.63h-.07v3.18h-3.38v-27.06h3.45v11.6c1.59-2.64,3.99-3.86,6.7-3.86,5.01,0,8.39,4.3,8.39,9.91,0,6.09-3.96,9.98-8.63,9.98-2.91,0-5.21-1.49-6.46-3.76Zm5.78.54c3.32,0,5.72-2.84,5.72-6.73s-2.4-6.7-5.72-6.7-5.85,2.77-5.85,6.73,2.6,6.7,5.85,6.7Z"
                />
                <path
                  class="cls-1"
                  d="m92.16,36.8v-11.77h3.45v10.56c0,3.89,1.9,5.58,4.26,5.58,3.15,0,4.9-2.87,4.9-5.78v-10.35h3.45v12.92c0,3.11.24,4.4.61,5.85h-3.45c-.3-1.22-.44-2.13-.41-2.91h-.07c-1.22,2.3-3.25,3.48-5.99,3.48-3.72,0-6.77-2.2-6.77-7.58Z"
                />
                <path
                  class="cls-1"
                  d="m115.37,16.41c1.32,0,2.34,1.08,2.34,2.33,0,1.39-1.02,2.44-2.34,2.44-1.39,0-2.4-1.05-2.4-2.44,0-1.25,1.01-2.33,2.4-2.33Zm-1.76,8.62h3.45v18.78h-3.45v-18.78Z"
                />
                <path
                  class="cls-1"
                  d="m122.41,16.74h3.45v27.06h-3.45v-27.06Z"
                />
                <path
                  class="cls-1"
                  d="m129.92,34.44c0-6.09,3.86-9.95,8.63-9.95,2.87,0,5.14,1.42,6.39,3.72h.07v-11.47h3.45v21.21c0,3.11.24,4.4.61,5.85h-3.42c-.3-1.22-.44-2.17-.44-3.11h-.07c-1.42,2.5-3.96,3.69-6.59,3.69-5.11,0-8.63-4.16-8.63-9.95Zm9.3,6.7c3.28,0,5.85-2.77,5.85-6.73s-2.57-6.7-5.85-6.7-5.72,2.84-5.72,6.73,2.4,6.7,5.72,6.7Z"
                />
                <path
                  class="cls-1"
                  d="m152.52,39.21c0-3.52,3.01-4.97,6.46-5.68,3.82-.78,5.79-.91,5.79-2.88,0-1.76-1.56-3.31-3.96-3.31-2.1,0-3.76,1.25-4.4,3.48l-3.25-1.08c1.12-3.76,4.47-5.25,7.82-5.25,3.99,0,7.27,2.03,7.27,6.46v7c0,3.08.24,4.4.61,5.85h-3.42c-.34-1.08-.44-2.03-.44-3.21h-.07c-1.08,2.2-3.31,3.79-6.29,3.79-3.18,0-6.12-1.69-6.12-5.18Zm7,2.47c3.25,0,5.25-2.94,5.25-5.18v-2.06c-1.02.61-2.23.98-4.09,1.35-1.83.37-4.4,1.12-4.4,3.28,0,1.66,1.29,2.6,3.25,2.6Z"
                />
                <path
                  class="cls-1"
                  d="m176.87,40.63h-.07v3.18h-3.38v-27.06h3.45v11.6c1.59-2.64,3.99-3.86,6.7-3.86,5.01,0,8.39,4.3,8.39,9.91,0,6.09-3.96,9.98-8.63,9.98-2.91,0-5.21-1.49-6.46-3.76Zm5.78.54c3.32,0,5.72-2.84,5.72-6.73s-2.4-6.7-5.72-6.7-5.85,2.77-5.85,6.73,2.6,6.7,5.85,6.7Z"
                />
                <path
                  class="cls-1"
                  d="m196.02,16.74h3.45v27.06h-3.45v-27.06Z"
                />
                <path
                  class="cls-1"
                  d="m203.49,34.5c0-5.82,3.89-10.01,9.3-10.01,4.09,0,8.8,2.47,8.8,9.68v1.12h-14.61c.24,3.76,2.77,6.02,6.02,6.02,2.67,0,4.64-1.62,5.58-3.96l3.18,1.25c-1.32,3.48-4.6,5.78-8.76,5.78-5.45,0-9.51-3.96-9.51-9.88Zm14.58-1.76c-.2-3.89-2.81-5.28-5.31-5.28-3.04,0-5.11,2.17-5.62,5.28h10.93Z"
                />
              </g>
              <g>
                <path
                  class="cls-1"
                  d="m39.49,22.8V7.6S26.32,0,26.32,0L0,15.2v30.39l26.32,15.2,26.32-15.2v-15.2l-13.16-7.6Zm-13.16,22.8l-13.16-7.6v-15.2l13.16-7.6v15.2l13.16,7.59h0s-13.16,7.61-13.16,7.61Z"
                />
                <polygon
                  class="cls-1"
                  points="39.48 37.99 39.48 37.99 26.32 30.39 39.48 37.99"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <h3>{heroData?.data?.q1}</h3>
      <p>{heroData?.data?.a1}</p>
      <h3>{heroData?.data?.q2}</h3>
      <p>{heroData?.data?.a2}</p>
      <div class="button-container">
        <a class="full-btn" href={heroData?.data?.full_btn_link}>
          {heroData?.data?.full_btn}
        </a>
      </div>
      <a class="outline-btn" href={heroData?.data?.bordered_btn_link}>
        {heroData?.data?.bordered_btn}
      </a>
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
    align-items: center;
    max-width: 470px;
    margin: 30px 0 30px 0;
    display: flex;
    gap: 0;
    flex-direction: column;
  }

  .hero-logo {
    position: relative;
    height: 64px;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    margin-bottom: 0.5em;
    margin-top: 2rem;
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
    color: var(--gray);
    background: none;
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
  }
</style>
