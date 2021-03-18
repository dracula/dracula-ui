import React from 'react'
import { Table } from '@/components/Table/Table'
import {
  TableBasic,
  TableColors,
  TableVariants
} from '@/components/Table/__stories__/Table.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Table, {
  basic() {
    return snapshot(
      'Usage',
      () => (
        <Table>
          <thead>
            <tr>
              <th className="drac-text drac-text-white">Name</th>
              <th className="drac-text drac-text-white">Age</th>
              <th className="drac-text drac-text-white" style={{ maxWidth: 200 }}>Bio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="drac-text drac-text-white">Nandor</td>
              <td className="drac-text drac-text-white">758 years</td>
              <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>Nandor was born in 1262 in the country of Al Quolanudar, now based in southern Iran. He is a former soldier of the Ottoman Empire; during this time he pillaged many villages without discrimination and twice turned the Euphrates “red with blood”. One village, a utopia that he burned to the ground, would later become the birthplace of Nadja, his future vampire roommate. Nadja would not realise this until the 21st century.</td>
            </tr>
            <tr>
              <td className="drac-text drac-text-white">Nadja</td>
              <td className="drac-text drac-text-white">512 years</td>
              <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>Nadja was very disadvantaged during her human life. Her village, located on a “beautiful” island with a high snake population, was once a utopia, but was burned to the ground by the army of an unknown warrior (who would eventually turn out to be her future roommate Nandor the Relentless) around 200 years before she was born. Only the "stupidest" people were spared and the village never recovered, leaving its citizens badly affected by famine and poverty.</td>
            </tr>
            <tr>
              <td className="drac-text drac-text-white">Laszlo</td>
              <td className="drac-text drac-text-white">329 years</td>
              <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>As a human, Laszlo was the most handsome man in a village affected by leprosy and plague, though he also contracted leprosy himself. One night, the vampire Nadja flew into his window and seduced him, before transforming into a hideous creature, biting him and turning him into a vampire. As a vampire, Laszlo gained powerful hypnosis abilities and the unique ability to control and communicate with animals. Like most vampires, he could transform into a bat, but for some reason he prefers to yell "bat!" each time before doing so.</td>
            </tr>
            <tr>
              <td className="drac-text drac-text-white">Colin</td>
              <td className="drac-text drac-text-white">103 years</td>
              <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>As an energy vampire, Colin Robinson’s origin is unclear. According to his roommate Laszlo, Colin “came with the house” they reside in. He has lived in the Staten Island residence with fellow vampires Laszlo, Nadja and Nandor since the 1970s at least. Nandor's former familiar Benjy and his current familiar Guillermo have also shared his home. He works in an office and frequently feeds off his co-workers by boring them with inane conversations. Outside of work hours, Colin gains energy by aggravating his roommates and trolling people online.</td>
            </tr>
          </tbody>
        </Table>
      ),
      'Presented in a two-dimensional table comprised of rows and columns.'
    )
  },
  variations() {
    return [
      snapshot(
        'Variants',
        () => (
          <Table variant="striped">
            <thead>
              <tr>
                <th className="drac-text drac-text-white">Name</th>
                <th className="drac-text drac-text-white">Age</th>
                <th className="drac-text drac-text-white" style={{ maxWidth: 200 }}>Bio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="drac-text drac-text-white">Nandor</td>
                <td className="drac-text drac-text-white">758 years</td>
                <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>Nandor was born in 1262 in the country of Al Quolanudar, now based in southern Iran. He is a former soldier of the Ottoman Empire; during this time he pillaged many villages without discrimination and twice turned the Euphrates “red with blood”. One village, a utopia that he burned to the ground, would later become the birthplace of Nadja, his future vampire roommate. Nadja would not realise this until the 21st century.</td>
              </tr>
              <tr>
                <td className="drac-text drac-text-white">Nadja</td>
                <td className="drac-text drac-text-white">512 years</td>
                <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>Nadja was very disadvantaged during her human life. Her village, located on a “beautiful” island with a high snake population, was once a utopia, but was burned to the ground by the army of an unknown warrior (who would eventually turn out to be her future roommate Nandor the Relentless) around 200 years before she was born. Only the "stupidest" people were spared and the village never recovered, leaving its citizens badly affected by famine and poverty.</td>
              </tr>
              <tr>
                <td className="drac-text drac-text-white">Laszlo</td>
                <td className="drac-text drac-text-white">329 years</td>
                <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>As a human, Laszlo was the most handsome man in a village affected by leprosy and plague, though he also contracted leprosy himself. One night, the vampire Nadja flew into his window and seduced him, before transforming into a hideous creature, biting him and turning him into a vampire. As a vampire, Laszlo gained powerful hypnosis abilities and the unique ability to control and communicate with animals. Like most vampires, he could transform into a bat, but for some reason he prefers to yell "bat!" each time before doing so.</td>
              </tr>
              <tr>
                <td className="drac-text drac-text-white">Colin</td>
                <td className="drac-text drac-text-white">103 years</td>
                <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>As an energy vampire, Colin Robinson’s origin is unclear. According to his roommate Laszlo, Colin “came with the house” they reside in. He has lived in the Staten Island residence with fellow vampires Laszlo, Nadja and Nandor since the 1970s at least. Nandor's former familiar Benjy and his current familiar Guillermo have also shared his home. He works in an office and frequently feeds off his co-workers by boring them with inane conversations. Outside of work hours, Colin gains energy by aggravating his roommates and trolling people online.</td>
              </tr>
            </tbody>
          </Table>
        ),
        'Table has a unique variation called `stripped` which changes the background color of each even row.'
      ),
      snapshot(
        'Colors',
        () => (
          <Table color="cyan">
            <thead>
              <tr>
                <th className="drac-text drac-text-white">Name</th>
                <th className="drac-text drac-text-white">Age</th>
                <th className="drac-text drac-text-white" style={{ maxWidth: 200 }}>Bio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="drac-text drac-text-white">Nandor</td>
                <td className="drac-text drac-text-white">758 years</td>
                <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>Nandor was born in 1262 in the country of Al Quolanudar, now based in southern Iran. He is a former soldier of the Ottoman Empire; during this time he pillaged many villages without discrimination and twice turned the Euphrates “red with blood”. One village, a utopia that he burned to the ground, would later become the birthplace of Nadja, his future vampire roommate. Nadja would not realise this until the 21st century.</td>
              </tr>
              <tr>
                <td className="drac-text drac-text-white">Nadja</td>
                <td className="drac-text drac-text-white">512 years</td>
                <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>Nadja was very disadvantaged during her human life. Her village, located on a “beautiful” island with a high snake population, was once a utopia, but was burned to the ground by the army of an unknown warrior (who would eventually turn out to be her future roommate Nandor the Relentless) around 200 years before she was born. Only the "stupidest" people were spared and the village never recovered, leaving its citizens badly affected by famine and poverty.</td>
              </tr>
              <tr>
                <td className="drac-text drac-text-white">Laszlo</td>
                <td className="drac-text drac-text-white">329 years</td>
                <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>As a human, Laszlo was the most handsome man in a village affected by leprosy and plague, though he also contracted leprosy himself. One night, the vampire Nadja flew into his window and seduced him, before transforming into a hideous creature, biting him and turning him into a vampire. As a vampire, Laszlo gained powerful hypnosis abilities and the unique ability to control and communicate with animals. Like most vampires, he could transform into a bat, but for some reason he prefers to yell "bat!" each time before doing so.</td>
              </tr>
              <tr>
                <td className="drac-text drac-text-white">Colin</td>
                <td className="drac-text drac-text-white">103 years</td>
                <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>As an energy vampire, Colin Robinson’s origin is unclear. According to his roommate Laszlo, Colin “came with the house” they reside in. He has lived in the Staten Island residence with fellow vampires Laszlo, Nadja and Nandor since the 1970s at least. Nandor's former familiar Benjy and his current familiar Guillermo have also shared his home. He works in an office and frequently feeds off his co-workers by boring them with inane conversations. Outside of work hours, Colin gains energy by aggravating his roommates and trolling people online.</td>
              </tr>
            </tbody>
          </Table>
        ),
        'Table can be customized to use any of the Dracula UI theme colors.'
      ),
    ]
  }
})
