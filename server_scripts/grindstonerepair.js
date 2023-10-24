// priority: 100
BlockEvents.rightClicked("minecraft:grindstone", event => {
    const item = event.player.getMainHandItem()
    if (item.hasTag("c:swords") || item.hasTag("c:axes")) {
        if (item.isDamaged()) {
            item.setDamageValue(item.getDamageValue() - 1)
            event.cancel()
        }
    }
})
