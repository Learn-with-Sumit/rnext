import Image from 'next/image';
import ActionButtons from '../ActionButtons';

const HeroSection = ({eventInfo}) => {
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={eventInfo?.imageUrl}
          alt="Event 1"
          className="h-[450px] mx-auto"
          width={900}
          height={900} />
      </div>


      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{eventInfo?.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{eventInfo?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{eventInfo?.interested_ids?.length} Interested</span>
            <span className="mx-2">|</span>
            <span>{eventInfo?.going_ids?.length} Going</span>
          </div>
        </div>

        <ActionButtons eventId={eventInfo?.id} interestedUserIds={eventInfo?.interested_ids} goingUserIds={eventInfo?.going_ids} fromDetails={true}/>
      </div>
    </section>
  )
}

export default HeroSection