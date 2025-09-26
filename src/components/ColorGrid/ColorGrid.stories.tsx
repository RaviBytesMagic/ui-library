import { colors } from '../../tokens/colors'
import { Button } from '../atoms/Button/Button'

export default {
  title: 'Components/Button',
  component: Button
}

export const ColorGrid = () => (
  <div className="grid grid-cols-3 gap-4">
    {Object.entries(colors.primary).map(([name, value]) => (
      <div key={name} className="p-4" style={{ backgroundColor: value }}>
        <p className="text-white">{name}</p>
      </div>
    ))}
  </div>
)
