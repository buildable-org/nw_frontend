<script>
    export let cardsData;
    export let id;

    // @ts-ignore
    function renderNodes(blocks = []) {
      return blocks.map(block => {
        if (block.type === 'paragraph') {
          return `<p>${renderChildren(block.children)}</p>`;
        }
        if (block.type === 'heading') {
          return `<h${block.level}>${renderChildren(block.children)}</h${block.level}>`;
        }
        if (block.type === 'list') {
          const listTag = block.format === 'ordered' ? 'ol' : 'ul';
          const items = block.children
            // @ts-ignore
            .map(item => `<li>${renderChildren(item.children)}</li>`)
            .join('');
          return `<${listTag}>${items}</${listTag}>`;
        }
        return `<div>${renderChildren(block.children)}</div>`;
      }).join('');
    }
    
    // @ts-ignore
    function renderChildren(children = []) {
      // @ts-ignore
      return children.map(node => {
        // link node
        if (node.type === 'link') {
          return `<a href="${node.url}">${renderChildren(node.children)}</a>`;
        }
        // text node with marks
        let text = node.text || '';
        if (node.bold) text = `<strong>${text}</strong>`;
        if (node.italic) text = `<em>${text}</em>`;
        if (node.underline) text = `<u>${text}</u>`;
        if (node.strikethrough) text = `<s>${text}</s>`;
        if (node.code) text = `<code>${text}</code>`;
        return text;
      }).join('');
    }
</script>

<style>
    .why {
      background: none;
      padding: 80px 20px;
      text-align: center;
    }
  
    .why h2 {
      font-size: 2.5rem;
      color: #f24236;
      margin-bottom: 50px;
    }
  
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      width: 90%;
      max-width: 1000px;
      margin: 0 auto;
    }
  
    .card {
      background: #141414;
      border-bottom: 3px solid #f24236;
      border-top: 3px solid #f24236;
      padding: 40px;
      border-radius: 8px;
    }
  
    .card h4 {
      font-size: 1.2rem;
      color: #f24236;
      margin-bottom: 15px;
    }
  
    .card p {
      font-size: 0.95rem;
      color: #f3a712;
    }
  
    .why .description {
      max-width: 700px;
      margin: 50px auto 0;
      font-size: 1rem;
      line-height: 1.6;
      color: #f3a712;
    }
</style>

<section class="why" id={id}>
    <h2>{cardsData?.data?.title}</h2>
    <div class="grid">
      {#each cardsData?.data?.cards as card}
        <div class="card">
          <h4>{card.title}</h4>
          {@html renderNodes(card.description)}
        </div>
      {/each}
    </div>
    <div class="description">
      {cardsData?.data?.description}
    </div>
  </section>