import { ActionButton } from "@/components/action-button"
import { FavoriteButton } from "@/components/favorite-button"
import { RefreshButton } from "@/components/refresh-button"
import { Card } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"

export default function ButtonsPage() {
  return <Card className='w-full max-w-md mx-auto'>
  <CardContent className='flex flex-col items-center space-y-6 py-6'>
    <div className='flex flex-row justify-center gap-4 items-center'>
      <ActionButton />
      <FavoriteButton />
      <RefreshButton />
    </div>
  </CardContent>
</Card>
}
