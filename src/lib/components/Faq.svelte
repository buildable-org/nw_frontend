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
        color: #f24236;
        margin-bottom: 50px;
    }

    .list {
        width: 90%;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .card {
        background: #141414;
        border-left: 2px solid #f24236;
        padding: 20px;
        border-radius: 8px;
        text-align: left;
    }

    .card h4 {
        font-size: 1.2rem;
        color: #f24236;
        margin-bottom: 10px;
    }

    .card p {
        font-size: 0.95rem;
        color: #f3a712;
    }

    .faq .description {
        max-width: 700px;
        margin: 50px auto 0;
        font-size: 1rem;
        line-height: 1.6;
        color: #f3a712;
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