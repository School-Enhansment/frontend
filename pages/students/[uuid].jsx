import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import api from '../../lib/api'

import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Loading from '../../components/Loading'
import LearningType from '../../components/LearningType'

function Students () {
  const [state, setState] = useState({ isLoading: true })

  const router = useRouter()
  const { uuid } = router.query

  useEffect(() => {
    const abortController = new AbortController()

    const getStudent = async () => {
      const response = await api.getStudent(uuid)
      const parsedJson = await response.json()
      const { student } = parsedJson.data
      if (!state.student) setState({ student, isLoading: false })
    }
    getStudent()

    return () => {
      abortController.abort();
    }
  })

  return (
    <div className='student-profile'>
      {state.isLoading && <Loading />}
      <div className='columns'>
        {state.student && (
<<<<<<< Updated upstream
          <div className="column">
            <Avatar gender={state.student.gender} />
            <Title
              text={state.student.firstName}
              size='3'
            />
            <LearningType />
          </div>
=======
          <>
            <div className='column is-3'>
              <div className='columns is-centered has-text-centered is-multiline'>
                <div className='column is-full'>
                  <Avatar gender={state.student.gender} />
                  <Title
                    text={state.student.firstName}
                    size='4'
                  />
                  <LearningType />
                  <div className='column is-full'>
                    <MedalsList medals={state.student.medals} />
                  </div>
                </div>
              </div>
            </div>
            <div className='column is-9'>
              <GroupList groups={state.student.groups} />
            </div>
          </>
>>>>>>> Stashed changes
        )}
        <div className='column has-text-centered'>hcfgj</div>
        <div className='column has-text-centered'>jhk</div>
        <div className='column has-text-centered'>ghjykhj</div>
        <div className='column has-text-centered'>ghjykhj</div>
      </div>
    </div>
  )
}

export default Students
