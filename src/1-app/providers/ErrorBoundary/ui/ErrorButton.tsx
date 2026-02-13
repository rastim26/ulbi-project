import { Button } from '6-shared/ui/Button/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Needed to test error boundary
export const ErrorButton = () => {
    const [error, setError] = useState(false)
    const onThrow = () => setError(true)
    const { t } = useTranslation()
    useEffect(() => {
        if (!error) return
        throw new Error('Error from ErrorButton')
    }, [error])

    return (
        <Button
            onClick={onThrow}
        >
            {t('Throw Error')}
        </Button>
    )
}
