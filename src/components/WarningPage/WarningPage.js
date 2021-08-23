import { useState } from 'react'
import WarningBanner from '../WarningBanner/WarningBanner'
const WarningPage = () => {
  const [showWarning, setShowWarning] = useState(true)
  const handleToggleClick = () => {
    setShowWarning((prevShow) => !prevShow)
  }
  return (
    <div>
      функциональный компонент
      <WarningBanner warn={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? 'Спрятать' : 'Показать'}
      </button>
    </div>
  )
}
export default WarningPage
