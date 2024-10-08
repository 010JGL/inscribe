import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/Navbar';
import { Box, ThemeProvider } from '@mui/material';
import { AllWalletsProvider } from './services/wallets/AllWalletsProvider';
import AppRouter from './AppRouter';
import city from './assets/city.jpeg'; 
import { theme } from './theme';
import "./App.css";
import milkyWay2 from './assets/milky-way2.jpg'; 


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AllWalletsProvider>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '180vh',
            backgroundColor: '#222222',
            backgroundImage: `url(${milkyWay2})`, // Updated backgroundImage
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Added backgroundAttachment
          }}
        >
          <header>
            <NavBar />
          </header>
          <Box
            flex={1}
            p={3}
          >
            <AppRouter />
          </Box>
          <Footer />
        </Box>
      </AllWalletsProvider>
    </ThemeProvider>
  );
}

export default App;
