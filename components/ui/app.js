import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from './components/TopBar';
import Text from './components/Text';

function App() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/@shadcn/ui@0.x.x/dist/shadcn-ui.min.js"></script>
        <title>Log-in</title>
      </Head>
      <TopBar />
      <div className="max-w-[1200px] mx-auto p-4">
        <div className="flex justify-center mt-8">
          <Text />
        </div>
      </div>
    </div>
  );
}

export default App;

Styles.css
/* Importing Fonts from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&display=swap');

body {
  font-family: 'Lexend Giga', sans-serif;
  background-color: #f4f4f5;
}

.dark-mode {
  background-color: #333;
  color: #fff;
}