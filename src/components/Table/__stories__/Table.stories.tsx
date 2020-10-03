import React from 'react'
import { TableProps, Table, tableVariants, tableColors } from '@/index'

export default {
  title: 'Table'
}

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
