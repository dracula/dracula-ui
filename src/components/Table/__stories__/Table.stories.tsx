import React from 'react'
import { TableProps, Table, tableVariants, tableColors } from '@/index'

export default {
  title: 'Table'
}

export const TableBasic = () => (
  <Table>
    <thead>
      <tr>
        <th className="drac-text drac-text-white">Name</th>
        <th className="drac-text drac-text-white">Age</th>
        <th className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
          Bio
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="drac-text drac-text-white">Nandor</td>
        <td className="drac-text drac-text-white">758 years</td>
        <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
          Nandor was born in 1262 in the country of Al Quolanudar, now based in
          southern Iran. He is a former soldier of the Ottoman Empire; during
          this time he pillaged many villages without discrimination[3] and
          twice turned the Euphrates “red with blood”.[4] One village, a utopia
          that he burned to the ground, would later become the birthplace of
          Nadja, his future vampire roommate. Nadja would not realise this until
          the 21st century.[1]
        </td>
      </tr>

      <tr>
        <td className="drac-text drac-text-white">Nadja</td>
        <td className="drac-text drac-text-white">512 years</td>
        <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
          Nadja was very disadvantaged during her human life. Her village,
          located on a “beautiful” island with a high snake population, was once
          a utopia, but was burned to the ground by the army of an unknown
          warrior (who would eventually turn out to be her future roommate
          Nandor the Relentless) around 200 years before she was born. Only the
          "stupidest" people were spared and the village never recovered,
          leaving its citizens badly affected by famine and poverty.[4]
        </td>
      </tr>

      <tr>
        <td className="drac-text drac-text-white">Laszlo</td>
        <td className="drac-text drac-text-white">329 years</td>
        <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
          As a human, Laszlo was the most handsome man in a village affected by
          leprosy and plague, though he also contracted leprosy himself. One
          night, the vampire Nadja flew into his window and seduced him, before
          transforming into a hideous creature, biting him and turning him into
          a vampire. As a vampire, Laszlo gained powerful hypnosis abilities and
          the unique ability to control and communicate with animals. Like most
          vampires, he could transform into a bat, but for some reason he
          prefers to yell "bat!" each time before doing so.[3]
        </td>
      </tr>

      <tr>
        <td className="drac-text drac-text-white">Colin</td>
        <td className="drac-text drac-text-white">103 years</td>
        <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
          As an energy vampire, Colin Robinson’s origin is unclear.[3] According
          to his roommate Laszlo, Colin “came with the house” they reside in. He
          has lived in the Staten Island residence with fellow vampires Laszlo,
          Nadja and Nandor since the 1970s at least. Nandor's former familiar
          Benjy[1] and his current familiar Guillermo have also shared his home.
          He works in an office and frequently feeds off his co-workers by
          boring them with inane conversations.[4] Outside of work hours, Colin
          gains energy by aggravating his roommates[5] and trolling people
          online.[6]
        </td>
      </tr>
    </tbody>
  </Table>
)

export const TableVariants = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      {Object.keys(tableVariants).map((variant) => {
        return (
          <div key={variant} style={{ marginBottom: 50 }}>
            <Table variant={variant as TableProps['variant']}>
              <thead>
                <tr>
                  <th className="drac-text drac-text-white">Name</th>
                  <th className="drac-text drac-text-white">Gender</th>
                  <th className="drac-text drac-text-white">Age</th>
                  <th className="drac-text drac-text-white">Provided by</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="drac-text drac-text-white">Nandor</td>
                  <td className="drac-text drac-text-white">Male</td>
                  <td className="drac-text drac-text-white">758 years</td>
                  <td className="drac-text drac-text-white">Kayvan Novak</td>
                </tr>

                <tr>
                  <td className="drac-text drac-text-white">Nadja</td>
                  <td className="drac-text drac-text-white">Female</td>
                  <td className="drac-text drac-text-white">512 years</td>
                  <td className="drac-text drac-text-white">
                    Natasia Demetriou
                  </td>
                </tr>

                <tr>
                  <td className="drac-text drac-text-white">Laszlo</td>
                  <td className="drac-text drac-text-white">Male</td>
                  <td className="drac-text drac-text-white">329 years</td>
                  <td className="drac-text drac-text-white">Matt Berry</td>
                </tr>

                <tr>
                  <td className="drac-text drac-text-white">Colin</td>
                  <td className="drac-text drac-text-white">Male</td>
                  <td className="drac-text drac-text-white">103 years</td>
                  <td className="drac-text drac-text-white">Mark Proksch</td>
                </tr>
              </tbody>
            </Table>
          </div>
        )
      })}
    </div>
  )
}

export const TableColors = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      {Object.keys(tableColors).map((color) => {
        return (
          <div key={color} style={{ marginBottom: 50 }}>
            <Table
              variant={'striped' as TableProps['variant']}
              color={color as TableProps['color']}
            >
              <thead>
                <tr>
                  <th className="drac-text drac-text-white">Name</th>
                  <th className="drac-text drac-text-white">Gender</th>
                  <th className="drac-text drac-text-white">Age</th>
                  <th className="drac-text drac-text-white">Provided by</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="drac-text drac-text-white">Nandor</td>
                  <td className="drac-text drac-text-white">Male</td>
                  <td className="drac-text drac-text-white">758 years</td>
                  <td className="drac-text drac-text-white">Kayvan Novak</td>
                </tr>

                <tr>
                  <td className="drac-text drac-text-white">Nadja</td>
                  <td className="drac-text drac-text-white">Female</td>
                  <td className="drac-text drac-text-white">512 years</td>
                  <td className="drac-text drac-text-white">
                    Natasia Demetriou
                  </td>
                </tr>

                <tr>
                  <td className="drac-text drac-text-white">Laszlo</td>
                  <td className="drac-text drac-text-white">Male</td>
                  <td className="drac-text drac-text-white">329 years</td>
                  <td className="drac-text drac-text-white">Matt Berry</td>
                </tr>

                <tr>
                  <td className="drac-text drac-text-white">Colin</td>
                  <td className="drac-text drac-text-white">Male</td>
                  <td className="drac-text drac-text-white">103 years</td>
                  <td className="drac-text drac-text-white">Mark Proksch</td>
                </tr>
              </tbody>
            </Table>
          </div>
        )
      })}
    </div>
  )
}
