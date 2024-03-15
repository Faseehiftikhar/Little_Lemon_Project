const Error = () => {
  return (
    <>
      <section className="container">
        <h3>Oops! It seems like you've taken a wrong turn.</h3>
        <p>The page you are looking for may have been moved, deleted, or simply doesn't exist. Don't worry, even the best get lost sometimes.</p>
        <p>Here are a few things you can try:</p>
        <ol>
        <li><strong>Double-check the URL:</strong> Make sure there are no typos or extra spaces. It's easy to mistype, especially with those tricky fingers!</li>
        <li><strong>Go to the homepage:</strong> Navigate back to the homepage and start fresh. You might find what you're looking for from there.</li>
        <li><strong>Use the search bar:</strong> The search bar is like a detective. Type in keywords related to what you're looking for, and it might just crack the case.</li>
        </ol>
        <p>If you're still having trouble, feel free to <a href="mailto:support@example.com">contact our support team</a>. 
        They're the superheroes of problem-solving and are always ready to assist.</p>
        <p>Thanks for your understanding, and happy browsing!</p>
      </section>
    </>
  );
};

export default Error;
