<template>
    <div class="container mt-4">
        <h1>Dashboard</h1>

        <div class="card mb-4">
            <div class="card-body">
                <h3>Latest stats</h3>
                <h6>Sales</h6>
                <h6>Inventory</h6>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <ul class="list-unstyled">
                    <li class="list-inline-item">
                        <RouterLink to="/dashboard/add" class="btn btn-primary">Add new Item</RouterLink>
                    </li>
                    <li class="list-inline-item">
                        <RouterLink to="/dashboard/inventory" class="btn btn-primary">Manage Inventory</RouterLink>
                    </li>
                </ul>
            </div>
    </div>
</div></template>