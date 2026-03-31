// import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import type { ProfileCardProps } from "../type/interface/rituals.interface"

const TeamCard = ({profile}:ProfileCardProps) => {
  return (
        <div className="p-1 flex flex-col items-center text-center rounded-md">

      {/* Image */}
      <div className="w-[180px] h-[230px] overflow-hidden rounded-[100px]">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="mt-6 text-[#5a0a2a] font-semibold text-sm">
        {profile.name}
      </h3>

      {/* Social Links */}
      <div className="mt-2 text-sm text-gray-600 space-x-2 flex">
        <span className="hover:text-[#5a0a2a] cursor-pointer"><FaFacebook /></span>
        <span className="hover:text-[#5a0a2a] cursor-pointer"><FaXTwitter /></span>
        <span className="hover:text-[#5a0a2a] cursor-pointer"><FaLinkedinIn /></span>
        <span className="hover:text-[#5a0a2a] cursor-pointer"><FaInstagram /></span>
      </div>

    </div>
  )
}

export default TeamCard