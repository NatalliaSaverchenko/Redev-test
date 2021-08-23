const WarningBanner = ({ warn }) => {
  if (!warn) {
    return null
  }
  return <div>Предупреждение</div>
}
export default WarningBanner
