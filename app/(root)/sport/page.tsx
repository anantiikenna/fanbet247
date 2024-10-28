// next_app/app/[fixtureid]/page.tsx

import Image from 'next/image';



const FixtureDetailPage: React.FC<FixtureDetailProps> = ({ fixture }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{fixture.home_team.name} vs {fixture.away_team.name}</h1>
        
            <Image src={fixture.league.logo} alt={fixture.league.name} className="h-16 w-16 mb-2" />
            <p className="text-gray-700">Date: {new Date(fixture.date).toLocaleString()}</p>
            <div className="mt-4">
                {/* Add your betting button here using Shadcn */}
                <button className="shadcn-button">
                    Place Bet
                </button>
            </div>
        </div>
    );
};


export default FixtureDetailPage;
