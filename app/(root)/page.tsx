import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Vasanth", lastName: "Kumar", email: "vasath971kr@gmail.com" };
  return (
    <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || "Guest"}
              subtext="Access and manage your account and transactions efficiently"
            />
            <TotalBalanceBox 
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250}
            />
          </header>
          recent Transactions
        </div>
        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks ={[{currentBalance: 123.50},{currentBalance: 15000.50}]}
        />
    </section>
  )
}

export default Home
