<script>
    export let buttonText1, buttonText2, buttonLink1, buttonLink2;
</script>
  
  <style>
    .full-btn:hover {
      background: var(--yellow);
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(243, 167, 18, 0.4);
    }
  
    .outline-btn:hover {
      background: var(--red);
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(242, 66, 54, 0.4);
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
      .full-btn {
        margin-bottom: 20px !important;
      }
    }
  </style>
  
  
<div class="button-container">
    <a class="full-btn" href={buttonLink1}>{buttonText1}</a>
    <a class="outline-btn" href={buttonLink2}>{buttonText2}</a>
</div>
  