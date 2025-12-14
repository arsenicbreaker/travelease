import CardOverview from '@/components/molecules/card/card-overview'
import { Button } from '@/components/atomics/button'
import Title from '@/components/atomics/title'

function Dashboard() {
  return (
    <main>
      <div className='flex items-center justify-between'>
        <Title
          section='admin'
          title='Overview'
          subtitle='You’ve made huge progress'
        />
        <Button
          size='button'
        >
          Export Report
        </Button>
      </div>

      <div className='mt-[30px]'>
        <h1 className='font-bold text-lg leading-[27px] text-secondary'>
          Statistics
        </h1>

        <div className='grid grid-cols-2 xl:grid-cols-4 gap-[30px] mt-3.5'>
          <CardOverview
            image='/icons/buildings.svg'
            title='1.4k+'
            subtitle='Trip Finished'
          />
          <CardOverview
            image='/icons/building.svg'
            title='183'
            subtitle='Countries'
          />
          <CardOverview
            image='/icons/profile-2user-fill.svg'
            title='84,209,199'
            subtitle='Customers'
          />
          <CardOverview
            image='/icons/card.svg'
            title='563,993'
            subtitle='Transactions'
          />
        </div>
      </div>
    </main>
  )
}

export default Dashboard
