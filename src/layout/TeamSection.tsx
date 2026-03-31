// import React from 'react'

import TeamCard from "../components/TeamCard"
import { teamMembers } from "../service/json/rituals.data"

const TeamSection = () => {
  return (
    <section className="p-5 team-section">
        <h2 className="text-[#5a0a2a] text-center font-bold text-xl p-5">Meet our team members</h2>
        <div className="cards-section flex flex-wrap  items-center justify-center">
            {teamMembers.map((profile)=>(
                <TeamCard key={profile.id} profile={profile}/>
            ))}
        </div>
    </section>
  )
}

export default TeamSection