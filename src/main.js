class App {
    run = async () => {
        const name = 'World';
        console.log(`Hello ${name}`);
    }
}

const app = new App();
app.run().then(() => console.log('done'));
