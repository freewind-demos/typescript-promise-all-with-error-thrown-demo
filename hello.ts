async function hello(name: string | null): Promise<void> {
  return new Promise((resolve, rejected) => {
    if (name === null) {
      rejected(new Error('Name should not be null'));
    } else {
      console.log(`Hello, ${name}`);
      resolve();
    }
  })
}

(async () => {
  try {
    await Promise.all([
      hello(null),
      hello('typescript1'),
      hello('typescript2'),
      hello('typescript3'),
      hello('typescript4'),
      hello('typescript5'),
    ])
  } catch (e) {
    console.log(`Found error: ${e}`)
  }
})();
