import graphene

import assessment.jobs.schema
import assessment.jobs.mutations
import assessment.lists.schema
import assessment.lists.mutations


class Query(
    assessment.jobs.schema.Query,
    assessment.lists.schema.Query,
):
    pass


class Mutation(
    assessment.jobs.mutations.Mutation,
    assessment.lists.mutations.Mutation,
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)


