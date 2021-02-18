import graphene
from graphene_django import DjangoObjectType
from assessment.lists.models import List as ListModel
from assessment.lists.mutations import ListType

class List(DjangoObjectType):
    class Meta:
        model = ListModel

class Query(graphene.ObjectType):
    lists = graphene.List(List)

    def resolve_lists(self, info):
        return ListModel.objects.all()

schema = graphene.Schema(query=Query)
