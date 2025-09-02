export default function TestEnv() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Test Variables d'Environnement</h1>
            <div className="space-y-2">
                <p><strong>Project ID:</strong> {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'Non défini'}</p>
                <p><strong>Dataset:</strong> {process.env.NEXT_PUBLIC_SANITY_DATASET || 'Non défini'}</p>
                <p><strong>API Version:</strong> {process.env.NEXT_PUBLIC_SANITY_API_VERSION || 'Non défini'}</p>
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded">
                <h2 className="text-lg font-semibold mb-2">Debug Info:</h2>
                <p><strong>Node ENV:</strong> {process.env.NODE_ENV}</p>
                <p><strong>All ENV keys:</strong> {Object.keys(process.env).filter(key => key.includes('SANITY')).join(', ')}</p>
            </div>
        </div>
    )
}
