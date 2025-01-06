<script>
    export let id;
    export let faqData;

    console.log(faqData);
</script>


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
        color: var(--yellow);
    }

    .faq .description {
        max-width: 700px;
        margin: 50px auto 0;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--yellow);
    }
</style>

<section class="faq" id={id}>
    <h2>{faqData?.title}</h2>
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
</section>