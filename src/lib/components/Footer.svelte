<script>
  // You can add any necessary script here
</script>

<footer>
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/faq">FAQ</a>
    <a href="/apply">Application</a>
  </div>
  <div class="social-links">
    <a
      href="https://x.com/_buildable_"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/x.svg" alt="X social media" />
    </a>
    <a
      href="https://www.linkedin.com/company/buildable-school"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/linkedin.svg" alt="LinkedIn" />
    </a>
  </div>
</footer>

<style>
  footer {
    display: flex;
    justify-content: space-between;
    padding: 2rem 5rem 2rem 5rem;
    background: none;
    color: white;
  }

  .nav-links,
  .social-links {
    display: flex;
    gap: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .social-links img {
    width: 32;
    height: 32px;
    filter: invert(1);
  }

  @media (max-width: 768px) {
    footer {
      padding: 2rem 2rem 2rem 2rem;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
</style>
