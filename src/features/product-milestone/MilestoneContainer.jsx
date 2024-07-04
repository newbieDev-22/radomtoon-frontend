import React from 'react'
import Milestone from './components/Milestone'
import AddMilestone from './components/AddMilestone'

export default function MilestoneContainer() {
  return (
    <>
      <Milestone />
      <div className="flex items-center flex-col gap-10">
        <AddMilestone name="Planning" />
        <AddMilestone name="Prototype" />
        <AddMilestone name="Production" />
      </div>
    </>
  )
}
