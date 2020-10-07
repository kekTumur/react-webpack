class App {
    run = async () => {
        const name = 'World';
        console.log(`Hello ${name}`);
        console.log([1, 3, 4, [2, 3]].flat());
    }
}

const app = new App();
app.run().then(() => console.log('done'));
